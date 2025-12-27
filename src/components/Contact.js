const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-4 m-4">Contact us</h1>
      <form>
        <input
          type="text"
          className="border-blue-100 p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border-blue-100 p-2 m-2"
          placeholder="message"
        ></input>
        <button className="bg-gray-300 rounded-lg p-2 m-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
