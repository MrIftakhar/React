import React from 'react'

const Footer=()=> {
  return (
    <>
    <div className='bg-light p-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h3>Newletter</h3>
                    <p className='widthSmall'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio ratione, quis perspiciatis non consequatur illo corporis molestiae repellat nulla.</p>
                </div>
                <div className='col-md-4'>
                    <div className='input-group mt-5'>
                        <input type="text" className='form-control' placeholder='Enter Your Email' />
                        <img src="img/send.svg" alt="" className='input-group-text'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p className='text-center mt-3'>CopyRight All Rights Reserved by ....</p>
    </>
  );
}

export default Footer;
