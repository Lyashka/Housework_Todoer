import React from 'react';
import BackgroundImg from '../../icons/background-cat.png';
import './emptyHistory.scss';

export default function EmptyHistory() {
  return (
    <section className="empty-history">
      <p className="empty-history__text">There are no finished tasks yet. But there’s a cat.</p>
      <img className="empty-history__cat" src={BackgroundImg} alt="" arial-role="presentation"/>
    </section>
  )
}
