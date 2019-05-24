import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  margin-right: 1.5rem;
  bottom: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--white);
  font-size: 1.2rem;
`;

const ScrollToTop = () => {
  return (
    <StyledWrapper onClick={() => scroll.scrollToTop()}>
      <StyledIcon icon={faChevronUp} />
    </StyledWrapper>
  );
};

export default ScrollToTop;
