import React from "react";
import Edit from "../assets/edit-icon.png";
import Delete from "../assets/delete-icon.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/12679999/pexels-photo-12679999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blog-img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile-img"
          />
          <div className="info">
            <span>Thiru</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit-icon" />
            </Link>
            <img src={Delete} alt="delete-icon" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          alias molestias laborum, eos incidunt quod ea cumque eum
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          repudiandae pariatur similique laborum qui maxime in eius! Sequi
          facilis deleniti repudiandae, nulla cupiditate numquam officiis ex
          quis, illum laborum recusandae.
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda
          nesciunt aliquam voluptatem similique quis voluptate eaque expedita,
          beatae iure odit suscipit architecto? Voluptatum quod vitae temporibus
          dolorem quae. Deserunt.
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          soluta hic distinctio at laborum, cum expedita consequatur, eos veniam
          voluptatum nesciunt ab minima iusto odit officia corrupti iste
          doloremque neque!
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          voluptatum modi, assumenda ducimus maxime ullam dolore nesciunt
          quibusdam accusamus consequatur dolorem ipsam eligendi quaerat
          consectetur commodi laboriosam dolorum? Explicabo, vel.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
