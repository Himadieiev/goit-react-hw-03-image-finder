import PropTypes from 'prop-types';
import css from './Modal.module.css';

export function Modal({ onClick, selectedPicture }) {
  const handleCloseClick = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={css.overlay} onClick={handleCloseClick}>
      <div className={css.modal}>
        <img src={selectedPicture.largeImageURL} alt={selectedPicture.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedPicture: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
