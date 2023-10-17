    // const heading=React.createElement("h1",{id:"heading"},"Har Har Mahadev")


    // const parent=React.createElement("div",{id:"parent"},
    // React.createElement("div",{id:"child"},
    // React.createElement("h1",{},"H1 tag here")))

~
    const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [ React.createElement("h1",{},"H1 here"),React.createElement("h2",{},"h2 here")]),
        React.createElement("div",{id:"child2"}, [ React.createElement("h1",{},"H1 here"),React.createElement("h2",{},"h2 here")])])


    // const root=ReactDOM.createRoot(document.getElementById("root"));

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
