import './Content.css'

function Content(){
    return(
        <div className="Content">
        <div className="p-3 mb-4 bg-body-tertiary rounded-3 w-75 m-auto">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome!</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Lets start</button>
      </div>
    </div>
        </div>
    );
}
export default Content;