import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const service = useLoaderData()
    const { title, _id } = service

    return (
        <div>
            <h1>{title}</h1>

            <div className="card-body">
                <form >

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>



    );
};

export default Checkout;