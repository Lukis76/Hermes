

// capturamos segmnento dinamico
app.get ('/api/notes/:segmento', (req, res) => {
    const segmento = req.params
    console.log({segmento})
    res.send(segmento)
})