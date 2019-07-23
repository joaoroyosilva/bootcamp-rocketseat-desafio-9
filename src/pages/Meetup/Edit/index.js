import React, { useState, useEffect } from 'react';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';

import { Form, Input } from '@rocketseat/unform';
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import 'react-datepicker/dist/react-datepicker.css';

import BannerInput from '../BannerInput';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function MeetupEdit({ match }) {
  const [meetup, setMeetup] = useState({
    logo_id: 0,
    title: '',
    location: '',
    date: new Date(),
  });
  const [description, setDescription] = useState('');
  registerLocale('pt-BR', ptBR);
  setDefaultLocale('pt-BR');
  const [date, setDate] = useState(new Date());
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);
      const data = {
        ...response.data,
        url: response.data.logo.url,
        formatedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' HH'h'",
          { locale: ptBR }
        ),
      };
      setMeetup(data);
      setDescription(data.description);
    }

    if (id) {
      loadMeetup();
    }
  }, [id]);

  async function handleSubmit(data) {
    try {
      let response;
      const dateSubmit = format(date, 'yyyy-MM-dd HH:mm:ss');
      if (meetup.id) {
        response = await api.put(`meetups/${id}`, {
          ...data,
          date: dateSubmit,
          description,
        });
      } else {
        response = await api.post(`meetups/`, {
          ...data,
          date: dateSubmit,
          description,
        });

        history.push(`/meetups/${response.data.id}/view`);
      }
      const meetupEdited = {
        ...response.data,
        url: response.data.logo.url,
        formatedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' HH'h'",
          { locale: ptBR }
        ),
      };

      setMeetup(meetupEdited);
      setDate(parseISO(meetupEdited.date));
      toast.success('Meetup editado com sucesso!');
    } catch (err) {
      console.log(err);
    }
  }

  function handleDateTimeChange(value) {
    setDate(value);
  }

  function handleDescriptionChange(value) {
    setDescription(value.target.value);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetup}>
        <BannerInput image={meetup.url} imageID={meetup.logo_id} />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          value={description}
          onChange={handleDescriptionChange}
          rows="6"
        />
        <ReactDatePicker
          locale="pt-BR"
          value={date}
          selected={date}
          onChange={handleDateTimeChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="dd 'de' MMMM 'de' yyyy, HH'h'"
          timeCaption="Hora"
        />
        <Input name="location" placeholder="Localização do Meetup" />
        <div>
          <button type="submit" className="button">
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}

MeetupEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};
