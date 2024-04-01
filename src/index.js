import React from 'react';
import ReactDOM from 'react-dom/client';
import './style2.css';
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//     <div className="container">
//         <div className="card">
//             <div className="card--header" />
//                 <img
//                     className="avatar"
//                     src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                     alt="avatar"
//                 />
//             <div className="card--body">
//                 <div>
//                     <p className="text-header">Nhat Nguyen</p>
//                     <p className="text-sub">Pro vip</p>
//                     <button className="btn third">Follow</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

root.render(
    <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
            <form>
                <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign</h1>
                <div className="form-floating">
                    <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control password" id="floatingPassword" placeholder="password"/>
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">2024</p>
            </form>
        </div>
    </div>
)