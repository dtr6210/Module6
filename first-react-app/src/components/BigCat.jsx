import Cat from "./SingleCat";

function CatList() {

    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../images/cheetah.jpg'},
        { name: 'Cougar', latinName: 'Puma concolor', image: '../images/cougar.jpg'},
        { name: 'Jaguar', latinName: 'Panthera onca', image: '../images/jaguar.jpg'},
        { name: 'Leopard', latinName: 'Panthera pardus', image: '../images/leopard.jpg'},
        { name: 'Lion', latinName: 'Panthera leo', image: '../images/lion.jpg'},
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: '../images/snowleopard.jpg'},
        { name: 'Tiger', latinName: 'Panthera tigris', image: '../images/tiger.jpg'},
       ];

       const catItemsComponent = cats.map((cat) => (
        <Cat
          key={cat.name}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        />
      ));

       return (
        <div>
        <ul>{catItemsComponent}</ul>
      </div>
       );
}

export default CatList