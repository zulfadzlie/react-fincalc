function Outputs(props) {  
    let mode = props.data.mode
    let pmt = parseFloat(props.data.inputPMT)
    let r = parseFloat(props.data.inputRATE)
    let g = parseFloat(props.data.inputGROW)
    let n = parseFloat(props.data.inputNPER)
    let pv = parseFloat(props.data.inputPV)
    let fv = parseFloat(props.data.inputFV)
    let mode2 = props.data.mode2

    let output

    if (mode === "PMT") {
        output = calculatePMT(r, g, n, pv, fv, mode2)
    } else if (mode === "PV") {
        output = calculatePV(pmt, r, g, n, fv, mode2)
    } else {
        output = calculateFV(pmt, r, g, n, pv, mode2)
    }

    return (
        <>
            <p align="center">{mode} = {printAnswer(output)}</p>
        </>
    )
}


function calculateFactor(r, g, n) {
    let gr = (1 + g/100) / (1 + r/100)
    let f 
    gr === 1 ? f = n : (f = (1 - Math.pow(gr, n)) / (1 - gr))
    return f
}


function calculatePMT(r, g, n, pv, fv, mode2) {
    let f = calculateFactor(r, g, n)

    let pmt = - (pv + fv / Math.pow(1 + r/100, n)) * (1 + r/100) / f
    
    if (mode2 === "BEGIN") {
        pmt = pmt / (1 + r/100)
    }

    return pmt
}


function calculatePV(pmt, r, g, n, fv, mode2) {
    let f = calculateFactor(r, g, n)

    let pv = - pmt / (1 + r/100) * f - fv / Math.pow(1 + r/100, n)

    if (mode2 === "BEGIN") {
        pv = - pmt * f - fv / Math.pow(1 + r/100, n)
    }

    return pv
}


function calculateFV(pmt, r, g, n, pv, mode2) {
    let f = calculateFactor(r, g, n)

    let fv = - (pv + pmt * f / (1 + r/100)) * Math.pow(1 + r/100, n)

    if (mode2 === "BEGIN") {
        fv = - (pv + pmt * f) * Math.pow(1 + r/100, n)
    }

    return fv
}


function printAnswer(answer) {
    answer = answer.toFixed(4)
    answer = answer.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    return answer
}


export default Outputs