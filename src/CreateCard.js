import Close from "./styles/close-times-svgrepo-com.svg";
import "./styles/create.scss"
const CreateCard = ({ show }) => {
  return (
    <>
     {
     show ?
     
     <div
        className="modalContainer" 
      >
        <div className="modal" >
          <header className="modal_header">
            <h2 className="modal_header-title"> modal Title </h2>
            <button className="close" >
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">
          This is modal Content
          </main>
          <footer className="modal_footer">
            <button className="modal-close" >
              Cancel
            </button>

            <button className="submit">Submit</button>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default CreateCard;