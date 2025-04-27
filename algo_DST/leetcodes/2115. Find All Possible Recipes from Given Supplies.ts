/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const possible = new Set(supplies);
    const nodes = {};
    for (let list of ingredients) {
        for (let name of list) nodes[name] = nodes[name] || [];
    }
    for (let name of supplies) nodes[name] = nodes[name] || [];
    for (let i = 0; i < recipes.length; i++) nodes[recipes[i]] = ingredients[i];
    const dfs = (name, visited) => {
        if (possible.has(name)) return true;
        if (nodes[name].length === 0 || visited.has(name)) return false;
        visited.add(name);
        const allPossible = nodes[name].every((neighborName) => dfs(neighborName, visited));
        if (allPossible) possible.add(name);
        return allPossible;
    }
    return recipes.filter((name) => dfs(name, new Set()));
};