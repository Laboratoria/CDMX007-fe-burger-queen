const breakfast = [
    {
        id: 0,
        name: "Sandwich jamón y queso",
        price: '50', 
        img: "https://ibb.co/VW6DFBt",
        
       },

       {
           id: 1,
           name: "Hotcakes",
           price: '45',
           img: "https://ibb.co/7tn5RTz",
       },

       {
           id: 2,
           name: "Waffles", 
           price: '40',
           img: "https://ibb.co/9c30PQy"
       }
]

class App extends React.Component{

	breakfastRenderObject(){
		return breakfast(ObjectTest).map(([key, value], i) => {
			return (
				<div key={key}>
					id is: {value.id} ;
					name: {value.name};
                    price: {value.price};
                    img: {value.img};
				</div>
			)
		})
	}

	render(){
		return(
			<div>
				{this._breakfastRenderObject()}
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('FoodGrid'))

