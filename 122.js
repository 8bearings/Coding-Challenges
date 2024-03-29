// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
  
    return list.reduce((p,c)=> {
      if(p[c.language]) p[c.language] += 1
      else p[c.language] = 1
      return p
    }, {})
}
