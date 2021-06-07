import React from 'react'

function SignUp() {
    return (
        <div className="container-sm mt-3">
            <div className="row">
                <div className="col-md-5 m-auto">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center mt-2">Sign up</h4>
                            <form>
                                <h5 className="text-center mt-3">Username</h5>
                                <input className="text-center form-control" type="text" placeholder="Username"/>
                                <h5 className="text-center mt-3">Password</h5>
                                <input className="text-center form-control" type="password" placeholder="Password"/>
                                <h5 className="text-center mt-3">Confirm password</h5>
                                <input className="text-center form-control" type="password" placeholder="Password"/>
                                <p className="text-center mt-2"><a className="text-decoration-none" href="http://www.google.com">Forgot password?</a></p>
                            </form>
                            <button className="btn btn-dark mt-2 form-control">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
