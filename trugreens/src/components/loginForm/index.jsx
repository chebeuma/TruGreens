import React from "react";
import "./style.css";

function LoginForm() {
  return (
    <div>
      <div className=" login-page">
        <form className="bg-white border border-white my-20  w-25% md:w-6/12  space-y-4 text-center border-width-1px">
          <form className=" mx-auto mt-12 w-50% md:w-6/12 space-y-12 text-center border-width-4px">
            <h1 className="text-4xl justify-items-center mt-4">
              <strong>WELCOME TO TRUGREENS.IN</strong>
            </h1>
            <div className="space-y-4 justify-items-center">
              <label className="text-start m-1">
                NAME:
                <input className="border border-black type-text placeholder-username rounded-md " />
              </label>
            </div>
            <div>
              <label className="text-start m-1">
                EMAIL:
                <input className="border border-black type-email placeholder-username rounded-md " />
              </label>
            </div>
            <div>
              <label className="text-start p-2">
                PASSWORD:
                <input className="border border-black type-password placeholder-password" />
              </label>
            </div>
            <button>LOGIN</button>
            <p className="p-3 mt-4 text-xs">
              Not registered?
              <span style={{ color: "green" }}>Create an account</span>
            </p>
          </form>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
