exports.success = (req, res, mensaje, header)=>{
    res.status(header || 200).send({
        error:'',
        body: mensaje
    })
}

exports.error = (req, res, mensaje, header, detalles)=>{
    console.log('[Response Error] - ',detalles)
    res.status(header || 500).send({
        error: mensaje,
        body: ''
    })
}