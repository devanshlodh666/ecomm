"use client";
import { useState } from "react";
import "../css/Header.css";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Contex } from "./Wrap";
import { useMemo,useEffect } from "react";
export const Header = () => {
  const route = useRouter();
  const [categories, setcategories] = useState(false);
  const [signI, setsignI] = useState(false);
  const{cartNumber, setcartNumber,name, setname,admin, setadmin} = Contex();
  const { data, status } = useSession("");
  useEffect(() => {
    if (status === "authenticated") {
      if (data !== undefined && name === '') {
        setname(data.user);
          fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.user?.name,
              email: data.user?.email,
              photo: data.user?.image,
            }),
          }).then((result) => {
            result.json();
          })      
          
          setTimeout(() => {
            fetch("/api/user/"+data.user?.email).then((result) =>{
              return result.json()
            })
            .then(v=>{
              setadmin(v.a.admin);
            })
          }, 500);
          console.log(name,"ASD"); 
        }
      }
  }, [data])

  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>

        <div className="link">
          <ul> 
            <li>Home</li>
            <li>About</li>
            <li
              className="categories"
              onMouseEnter={() => setcategories(true)}
              onMouseLeave={() => setcategories(false)}
            >
              <p className="categor" style={{ display: "flex" }}>
                Categories
                {!categories ? (
                  <img src="arrow-down.svg" alt="" />
                ) : (
                  <img src="arrow-up.svg" alt="" />
                )}
              </p>

              <div className="nav2">
                {categories && (
                  <ul className="link2">
                    <li>Phone</li>
                    <li >Cloths</li>
                    <li>Headphones </li>
                    <li>Headphones </li>
                    <li>Headphones </li>
                    <li>Headphones </li>
                  </ul>
                )}
              </div>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="profile">
          <ul>
            <li
              onMouseEnter={() => setsignI(true)}
              onMouseLeave={() => setsignI(false)}
            >
              <p
                onClick={() =>name ? route.push("/profile") : route.push('/login')}
                className="signIn"
              >
                <img src="user.svg" alt="" /> {name ? "Profile" : "LogIn"}
                {!signI ? (
                  <img src="arrow-down.svg" alt="" />
                ) : (
                  <img src="arrow-up.svg" alt="" />
                )}
              </p>
              
              {signI && (
                <div className="nav3">
                  <ul className="link3">
                    <li onClick={()=>route.push('/profile')}>
                      <img src="user.svg" />
                        Profile
                    </li>

                    { admin === 1 &&<><li onClick={()=>route.push('/editDeal')}>
                      <img src="edit.svg" />
                        Deals
                    </li>
                    
                    <li onClick={()=>route.push('/editProduct')}>
                      <img src="edit.svg" />
                        Product
                    </li>
                    
                    <li onClick={()=>route.push('/dashBord')}>
                      <img src="dashboard.svg" />
                        dashBord
                    </li>
                    </>}
                    

                    <li
                      onClick={() =>
                        name ? signOut("google") : signIn("google")
                      }
                    >
                      <img src={name?"logout_1.svg":"logout.svg"} /> {name ? "log Out" : "log In"}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cart">
              <img src="shopping-cart.svg" alt="" />
              <p className="cartNumber">{cartNumber}</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
