import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css";
function Home() {
  return (
    <div>
        {/* Explore */}
        <section className='flex'>
          <div className='flex-col'>
            <h2 className='heading'>
              Home To All Your Videos
            </h2>
            <div className='flex-row'>
            <Link to="/videos">
              {/* <button className='buttons'>
                Watch Now
              </button> */}
              <button class="btn btn-primary-solid">Watch Now</button>

              </Link>
              <button class="btn btn-primary-solid">Login</button>
              {/* <button className='buttons'>Login</button> */}
            </div>
          </div>
        </section>
    </div>
  )
}

export {Home}