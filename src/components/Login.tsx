import React from "react";

const Login = () => {
  return (
    <form className="card-body pt-4">
      <div className="form-control">
        <h1 className="text-3xl font-bold">Join our Team!</h1>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-soft-white">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-soft-white">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a
            href="#"
            className="label-text-alt link link-hover text-soft-white"
          >
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-cyan-400 text-soft-white hover:bg-cyan-700">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
