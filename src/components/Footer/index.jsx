import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function index() {
  const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    margin-right: 10px;
    padding: 7px;
    border: 1px solid rgba(226, 232, 239, 0.6);
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 1px solid rgb(244 63 94);
    }
  `;
  const Icons = [
    {
      name: "Facebook",
      icons: <i class="fa-brands fa-facebook"></i>,
    },
    {
      name: "Linkedin",
      icons: <i class="fa-brands fa-linkedin"></i>,
    },
    {
      name: "Twitter",
      icons: <i class="fa-brands fa-twitter"></i>,
    },
    {
      name: "Github",
      icons: <i class="fa-brands fa-github"></i>,
    },
  ];

  const bookCatelog1 = [
    {
      name: "History",
      path: "/",
    },
    {
      name: "Horror - Thriller",
      path: "/",
    },
    {
      name: "Love Stories",
      path: "/",
    },
    {
      name: "Science Fiction",
      path: "/",
    },
    {
      name: "Business",
      path: "/",
    },
  ];
  const bookCatelog2 = [
    {
      name: "Biography",
      path: "/",
    },
    {
      name: "Astrology",
      path: "/",
    },
    {
      name: "Digital Marketing",
      path: "/",
    },
    {
      name: "Software Development",
      path: "/",
    },
    {
      name: "Ecommerce",
      path: "/",
    },
  ];
  const siteMap = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "FAQs",
      path: "/faq",
    },
    {
      name: "Contact",
      path: "/contect",
    },
  ];
  return (
    <>
      <footer className="flex flex-col justify-evenly sm:flex-row flex-wrap p-10">
        <div className="w-full sm:w-[50%] lg:w-[20%]">
          <img
            src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo2_footer.png.webp"
            alt="Logo.png"
            className="my-4"
          />
          <p>
            Get the breathing space now, and we’ll extend your term at the other
            end year for go.
          </p>
          <div className="flex">
            {Icons.map((ele, index) => {
              return (
                <IconDiv className="hover:bg-rose-500 transition-all duration-600 text-slate-400 hover:text-white">
                  {ele.icons}
                </IconDiv>
              );
            })}
          </div>
        </div>
          <List title="Book Catelog" list={bookCatelog1} />
          <List  list={bookCatelog2} />
          <List title="Site Map" list={siteMap} />
      </footer>
    </>
  );
}

function List({ title, list }) {
  return (
    <div className="p-8 w-full sm:w-[50%] lg:w-[20%] ml-0 lg:ml-[1%]">
      <h2 className={`text-xl
      ${!title && 'h-0'}
      font-semibold sm:h-[25px]`}>{title}</h2>
      <ul className="my-5">
        {list.map((ele, index) => {
          return (
            <li
              key={index}
              className="text-slate-600 my-3 text-sm no-underline hover:underline underline-offset-1 cursor-pointer"
            >
              <Link to={ele.path}>{ele.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default index;
