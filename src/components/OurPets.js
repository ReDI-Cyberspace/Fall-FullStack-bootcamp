function OurPets() {
  return (
    <div>
      <div className="ourPetsTable">
        <table className="table table-bordered">
          <thead className="tableTitle">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Males</th>
              <th scope="col">Females</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cats</td>
              <td>1</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Dogs</td>
              <td>3</td>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Rabbits</td>
              <td>4</td>
              <td>0</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Turtles</td>
              <td>2</td>
              <td>1</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ourPets"></div>
    </div>
  );
}

export default OurPets;
