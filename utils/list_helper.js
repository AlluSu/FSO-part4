const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
  
    // TODO: Refaktorointi funktionaaliseksi!!
    let total = 0
    for (let i = 0; i < blogs.length; i++) {
        total += blogs[i].likes
    }
    return total
}

module.exports = {
    dummy,
    totalLikes
}