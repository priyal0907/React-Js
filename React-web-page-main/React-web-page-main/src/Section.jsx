import React from "react";

export const Section = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className="col-lg-7 col-md-7">
                        <div className="row">
                            <h1>We Design <br></br>Web templates</h1>
                            <p>
                                A Creative agency with a passion for design. We continue to add <br></br>
                                new things to make our products more beautiful every day.
                            </p>
                        </div>
                        <button className='btn btn-primary'>Our PORTFOLIO</button>
                    </div>
                    <div className='col-md-5 col-lg-5'>
                        <div className='row'>
                            <img src='home.png'></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section;