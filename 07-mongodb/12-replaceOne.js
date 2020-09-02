filterDoc2 = { name: 'Jonathan' };

// we are not using set in the update clause
updateDoc2 = {
    name: 'Johnny'
};

// _id remains the same (document is the same) - but all fields have been replaced (old fields are all removed and new ones have been added)
db.person.replaceOne( filterDoc2, updateDoc2 );