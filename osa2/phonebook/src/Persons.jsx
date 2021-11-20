import Person from './Person'

const Persons = ({persons, filter}) => {
  return(
  <div className="persons">
    {persons.filter(person => {
      return person.name.substring(0, filter.name.length).toLowerCase() 
        === filter.name.toLowerCase()
    }).map((person) => {
      return(<Person key={person.id} person={person}/>);
    })}
  </div>
  );
}
export default Persons;