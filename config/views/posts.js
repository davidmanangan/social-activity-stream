exports.by_to = {
    map: function (doc){
        /** check if to attribute exists */ 
        if(doc.to){
            /** emit docs with same doc.to values */ 
            emit(doc.to, {_id:doc._id})
        }
    }
}

exports.by_user = {
    map: function (doc){
        /** check if to attribute exists */ 
        if(doc.user){
            /** emit docs with same doc.to values */ 
            emit(doc.user, {_id:doc._id})
        }
    }
}