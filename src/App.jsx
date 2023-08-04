import "./App.css";
import Person from "./components/Person.jsx";
import Counter from "./components/Counter";
const persons = [
  {
    name: "Sameer Basnet",
    age: 23,
    gender: "male",
    location: "Ktm",
    githubLink: "https://github.com",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
  },
  {
    name: "Minal Basnet",
    age: 21,
    gender: "female",
    location: "Lalitpur",
    githubLink: "https://github.com",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
  },

  {
    name: "Ramila Basnet",
    age: 21,
    gender: "female",
    location: "Lalitpur",
    githubLink: "https://github.com",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNhyVhHOLQ1ImKc7zfo4pkFNyCkvXdAQzqm-q-dkbCg&s",
  },
];
function App() {
  return (
    <div className="main-div">
      <Counter />
      {/* {persons.map((item, index) => {
        return <Person {...item} key={index} />;
      })} */}
    </div>
  );
}

export default App;
