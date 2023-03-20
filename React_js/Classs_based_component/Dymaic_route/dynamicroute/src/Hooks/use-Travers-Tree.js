const useTravelTree = () => {
  function insertNode(tree, routeId, item, hasChield) {
    console.log(tree);
    tree.map((ele) => {
      if ((ele.id = routeId)) {
        ele.Chield.unshift({
          id: new Date().getTime(),
          routeName: item, //new node name
          hasChield: false,
          Chield: [],
        });
      }
    });
    return tree;
  }
  return { insertNode };
};

export default useTravelTree;
