import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function MeetupView({ match }) {
  const [meetup, setMeetup] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);
      const data = {
        ...response.data,
        formatedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' HH'h'",
          { locale: pt }
        ),
      };
      setMeetup(data);
    }

    loadMeetup();
  }, [id]);

  async function handleDeleteMeetup(e) {
    try {
      e.preventDefault();
      await api.delete(`meetups/${id}`);
      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(`${err.response.data.error}`);
    }
  }

  function handleNavigateEdit() {
    history.push(`/meetups/${meetup.id}/edit`);
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button type="button" className="edit" onClick={handleNavigateEdit}>
            Editar
          </button>
          <button type="button" onClick={handleDeleteMeetup}>
            Cancelar
          </button>
        </div>
      </header>
      <img src={meetup.logo ? meetup.logo.url : ''} alt="Meetup" />
      <span>{meetup.description}</span>
      <div>
        <span>{meetup.formatedDate}</span>
        <span>{meetup.location}</span>
      </div>
    </Container>
  );
}

MeetupView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};
