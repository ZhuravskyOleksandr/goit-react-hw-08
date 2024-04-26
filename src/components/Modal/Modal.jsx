import css from './Modal.module.css';
import ReactModal from 'react-modal';
import ModalMarkup from '../ModalMarkup/ModalMarkup';
import { actions } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsModalOpen,
  selectModalActionType,
} from '../../redux/modal/selectors';
import { closeModal } from '../../redux/modal/slice';
import EditForm from '../EditForm/EditForm';

export default function Modal() {
  ReactModal.setAppElement('#root');

  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalActionType = useSelector(selectModalActionType);

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => {
        dispatch(closeModal());
      }}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      bodyOpenClassName={css.blockScroll}
    >
      {modalActionType === actions.editContact && <EditForm />}
      {modalActionType === actions.logOut && (
        <ModalMarkup actionType={actions.logOut} />
      )}
      {modalActionType === actions.deleteContact && (
        <ModalMarkup actionType={actions.deleteContact} />
      )}
    </ReactModal>
  );
}
