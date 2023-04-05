import Item from './component/Layout/Item';
import dataYtb from './dbData/data';
import './App.scss';

console.log(dataYtb);
function App() {
    return (
        <div className="app__layout active">
            {/* render data thonng qua props */}
            {dataYtb.map((item, index) => (
                <Item key={item.id} image={item.image} avatar={item.avatar} title={item.title} content={item.content} />
            ))}

            {/* <Item
                image="https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                title="Wellcome to the Sun"
                content="Never go back to the Sun"
            />
            */}
        </div>
    );
}

export default App;
