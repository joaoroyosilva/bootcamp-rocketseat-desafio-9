import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Meetup } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        formatedDate: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNavigationNew() {
    history.push('/meetups/new');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNavigationNew}>
          Novo meetup
        </button>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Link to={`meetups/${meetup.id}/view`} key={meetup.id}>
            <Meetup>
              <strong>{meetup.title}</strong>
              <span>{meetup.formatedDate}</span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
