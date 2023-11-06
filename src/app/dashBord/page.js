"use client";
import "@/app/css/dashbord.css";
import { usePathname } from "next/navigation";
const page = () => {
  const path = usePathname();
  return (
    <div className="main_dashbord">
      <div className="left_dashbord">
        <div className="first_left_dashbord">
          <img
            src="https://img.freepik.com/free-vector/gangster-dog-character-vector-illustration_43623-1272.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais"
            alt="."
          />
          <h1>Devansh</h1>
        </div>
        <hr />
        <div className="second_left_dashbord">
          <ul>
            <li className={(path == "/dashBord")? "dash_page":""}>Request</li>
            <li className={(path == "/dashBord/product")? "dash_page":""}>
              Product
            </li>
            <li className={(path == "/dashBord/user")? "dash_page":""}>Users</li>
            <li className={(path == "/dashBord/rating")? "dash_page":""}>
              Rating
            </li>
            <li className={(path == "/dashBord/like") ? "dash_page":""}>Like</li>
            <li className={(path == "/dashBord/cart") ? "dash_page":""}>Cart</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
      <div className="right_dashbord">
        <div className="dash_all_req">
          <div className="dash_req">
            <div className="dash_req_first">
              <img
                src="https://img.freepik.com/free-vector/gangster-dog-character-vector-illustration_43623-1272.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais"
                alt="."
              />
              <h4>Suryakant</h4>
              </div>
            <div className="dash_req_second">
              <p>Watch,Sa</p>
            </div>
            <div className="dash_req_third"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
