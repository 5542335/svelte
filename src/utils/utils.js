export const getMaxId = (items) => {
    return items.reduce((acc, item) => (acc.id > item.id ? acc : item), 0).id;
};