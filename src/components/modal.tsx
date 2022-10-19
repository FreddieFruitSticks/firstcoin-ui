import { useState } from 'react';
import Modal from 'react-modal';

const MyModal = ({}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    let subtitle: HTMLHeadingElement | null;
    const [modalIsOpen, setIsOpen] = useState(true);
    const [modalHasOpened, setModalHasOpened] = useState(false);
  
    function openModal() {
        if (!modalHasOpened){
            setIsOpen(true);
            setModalHasOpened(true)
        }
    }

  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-trendyRed font-bold mb-4">Welcome to Firstcoin!</h2>
                <div>I see you are on a mobile phone. Please use landscape mode, or a larger screen, to use the functionality of this app. Happy mining!</div>
                <button onClick={closeModal} className={`h-10 w-16 mt-4 focus:ring-4 focus:ring-white bg-trendyRed text-white flex justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer font-semibold py-2 px-4 rounded`}>
                    Close
                </button> 
            </Modal>
        </div>

    )
}

export default MyModal