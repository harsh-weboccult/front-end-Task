const useTraverseTree = () => {
  const insertNode = function (tree, RouteId, item, hasChield) {
    if (tree.id === RouteId && tree.hasChield) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        hasChield: true,
        items: [],
        hasPerent: true,
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, RouteId, item, hasChield);
    });

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
