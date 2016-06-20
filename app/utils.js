function find_by_id(iter, id) {
    for (var i in iter){
        if (iter[i].id == id)
            return iter[i];
    }
    return null;
}