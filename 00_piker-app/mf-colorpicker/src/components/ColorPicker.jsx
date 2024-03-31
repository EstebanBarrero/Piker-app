import React from "react";

const ColorPicker =({color, handleChangeColor, handleSumitSaveColor}) => {
    return(
        <>
            <form onSubmit={handleSumitSaveColor}>
                <input
                    type="color"
                    className="form control"
                    style={{
                        width: "100%",
                        height: "300px",
                    }}
                    title="seleccione un color..."
                    value={color}
                    onChange={handleChangeColor}
                />

                <div className="text-center">
                    <h2 className="mt-3 fw-bolder">
                    <div
                    style={{
                        width: "20px",
                        height: "20px",
                        background:color,
                        display: "inline-block",
                        margin: "0 1rem",
                        borderRadius:"100%",
                    }}>
                    </div>
                    {color}
                    </h2>
                    <button type="submit" className="btn btn-success">
                        Guardar color
                    </button>
                </div>
            </form>
        </>
    );
};

<<<<<<< HEAD
export default ColorPicker
=======


export default ColorPicker;
>>>>>>> b2922bcf9ef51bc44ab0296104269618e9422269
