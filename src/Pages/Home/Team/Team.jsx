import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div>
            <div className='mt-4 '>
                <div className='text-center '>
                    <h3 className="text-2xl font-bold  text-orange-600">Team</h3>
                    <h2 className='text-5xl'>Meet Our Team </h2>
                    <p className=''>
                        the majority have suffered alteration in some form, by injected humour, or randomised
                        <br /> words which don't look even slightly believable.
                    </p>
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6  '>

                    <div className=''>
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={img2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title font-bold">Car Engine Plug</ h2>
                                <p className='text-xl my-4'>Engine Expert</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={img1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title font-bold">Car Engine Plug</ h2>
                                <p className='text-xl my-4'>Engine Expert</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={img3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title font-bold">Car Engine Plug</ h2>
                                <p className='text-xl my-4'>Engine Expert</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Team;