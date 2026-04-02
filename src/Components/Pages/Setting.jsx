import React, { useState } from 'react'
import "./Setting.css"
import Dark from "../../Images/themes/Dark.png";
import light from "../../Images/themes/light.png";
import DarkBlue from "../../Images/themes/DarkBlue.png";
import Default from "../../Images/themes/Default.png";
import image from "../../Images/Wallpapers/image.jpg";
import image2 from "../../Images/Wallpapers/image2.jpg";
import image3 from "../../Images/Wallpapers/image3.jpg";
import image4 from "../../Images/Wallpapers/image4.jpg";
import image5 from "../../Images/Wallpapers/image5.jpg";
import image6 from "../../Images/Wallpapers/image6.jpg";
import image7 from "../../Images/Wallpapers/image7.jpg";


const Setting = () => {

    const [settingNavName, setSettingNavName] = useState("");

    function SettingNav(name) {
        console.log(name)
        setSettingNavName(name)
    }

    return (
        <div className='Setting-div'>

            <div className="Setting-nav">
                <span className={`themes ${(settingNavName == "Themes") ? "span-color" : ""} `} onClick={() => SettingNav("Themes")} >Themes</span>
                <span className={`Wallpapers ${(settingNavName == "Wallpapers") ? "span-color" : ""}`} onClick={() => SettingNav("Wallpapers")} >Wallpapers</span>
                <span className={`Tab-style ${(settingNavName == "Tab_style") ? "span-color" : ""}`} onClick={() => SettingNav("Tab_style")} >Tab Style</span>
            </div>

            <div className="Setting-body">
                {
                    (settingNavName == "Wallpapers") ? <Wallpapers /> :
                        (settingNavName == "Tab_style") ? <Tab_style /> : <Themes />
                }
            </div>

        </div>
    )
}

export default Setting




export const Themes = () => {

    const handleThemeSet = (themeName) => {
        localStorage.setItem("appTheme", themeName);
        
        // Apply theme to TopNav
        const topNav = document.querySelector(".mac-nav");
        if (topNav) {
            switch(themeName) {
                case "default":
                    topNav.style.background = "#5e5e5e27";
                    break;
                case "dark":
                    topNav.style.background = "#1a1a1a99";
                    break;
                case "light":
                    topNav.style.background = "#e0e0e099";
                    topNav.style.color = "#000000";
                    break;
                case "darkblue":
                    topNav.style.background = "#1a3a5a99";
                    break;
            }
        }
        
        // Apply theme to TabNav
        const navTab = document.querySelector(".nav-tab");
        if (navTab) {
            switch(themeName) {
                case "default":
                    navTab.style.background = "#5e5e5e27";
                    break;
                case "dark":
                    navTab.style.background = "#1a1a1a99";
                    break;
                case "light":
                    navTab.style.background = "#e0e0e099";
                    break;
                case "darkblue":
                    navTab.style.background = "#1a3a5a99";
                    break;
            }
        }
        
        // Apply theme to BottomNav - background only, keep centered
        const bottomNav = document.querySelector(".bottom-nav");
        if (bottomNav) {
            switch(themeName) {
                case "default":
                    bottomNav.style.background = "transparent";
                    break;
                case "dark":
                    bottomNav.style.background = "transparent";
                    break;
                case "light":
                    bottomNav.style.background = "transparent";
                    bottomNav.style.color = "#000000";
                    break;
                case "darkblue":
                    bottomNav.style.background = "transparent";
                    break;
            }
        }
        
        // Apply theme to software-icons instead
        const softwareIcons = document.querySelector(".bottom-nav .software-icons");
        if (softwareIcons) {
            switch(themeName) {
                case "default":
                    softwareIcons.style.background = "#5e5e5e27";
                    break;
                case "dark":
                    softwareIcons.style.background = "#1a1a1a99";
                    break;
                case "light":
                    softwareIcons.style.background = "#e0e0e099";
                    softwareIcons.style.color = "#000000";
                    break;
                case "darkblue":
                    softwareIcons.style.background = "#1a3a5a99";
                    break;
            }
        }
        
        console.log("Theme set to:", themeName);
    };
    
    // Load default theme on mount
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("appTheme") || "default";
        handleThemeSet(savedTheme);
    }, []);

    return (
        <>
            <p>Themes!</p>
            <div className='Themes-div'>

                <div className="default-div">
                    <img className='theme-image' src={Default} />
                    <button className='Themes-btn' onClick={() => handleThemeSet("default")} style={{backgroundColor: "#4CAF50"}}>Set Theme</button>
                </div>

                <div className="dark-div">
                    <img className='theme-image' src={Dark} />
                    <button className='Themes-btn' onClick={() => handleThemeSet("dark")}>Set Theme</button>
                </div>

                <div className="light-div">
                    <img className='theme-image' src={light} />
                    <button className='Themes-btn' onClick={() => handleThemeSet("light")}>Set Theme</button>
                </div>

                <div className="darkblue-div">
                    <img className='theme-image' src={DarkBlue} />
                    <button className='Themes-btn' onClick={() => handleThemeSet("darkblue")}>Set Theme</button>
                </div>
            </div>
        </>
    )
}

export const Wallpapers = () => {
    function BGWallpapers(image) {
        localStorage.setItem("bgImage", image)
        console.log(window.location.reload())
    }

    return (
        <>
            <p>Wallpapers!</p>
            <div className="wallpaper-images">

                <div className="wallpaper-images-div">
                    <img src={image} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image.jpg")} >set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image2} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image2.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image3} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image3.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image4} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image4.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image5} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image5.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image6} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image6.jpg")}>set as a wallpaper</button>
                </div>

                <div className="wallpaper-images-div">
                    <img src={image7} className='wallpaper-image' />
                    <button className="Themes-btn" onClick={() => BGWallpapers("image7.jpg")}>set as a wallpaper</button>
                </div>


            </div>

        </>
    )
}

export const Tab_style = () => {
    const [fontSize, setFontSize] = useState("M");
    const [fontColor, setFontColor] = useState("Black");
    const [fontFamily, setFontFamily] = useState("Default");

    const fontSizeMap = { "S": "12px", "M": "14px", "L": "16px","LX": "20px" };
    const fontColors = { "Black": "#000000", "White": "#ffffff", "Red": "#ff5555","Green": "#84dd84ff" };
    const fontFamilies = { "Default": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", "Courier": "'Courier New', monospace", "Georgia": "Georgia, serif" };

    const handleSetStyle = () => {
        const styles = {
            fontSize: fontSize,
            fontColor: fontColor,
            fontFamily: fontFamily
        };
        localStorage.setItem("tabStyles", JSON.stringify(styles));
        
        // Apply styles to all text elements
        const allElements = document.querySelectorAll("body, body *");
        allElements.forEach(el => {
            if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE') {
                el.style.fontSize = fontSizeMap[fontSize];
                el.style.color = fontColors[fontColor];
                el.style.fontFamily = fontFamilies[fontFamily];
            }
        });
        
        console.log("Tab styles saved:", styles);
    };

    // Load styles on mount
    React.useEffect(() => {
        const saved = localStorage.getItem("tabStyles");
        if (saved) {
            const styles = JSON.parse(saved);
            setFontSize(styles.fontSize);
            setFontColor(styles.fontColor);
            setFontFamily(styles.fontFamily);
            
            // Apply saved styles
            const allElements = document.querySelectorAll("body, body *");
            allElements.forEach(el => {
                if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE') {
                    el.style.fontSize = fontSizeMap[styles.fontSize];
                    el.style.color = fontColors[styles.fontColor];
                    el.style.fontFamily = fontFamilies[styles.fontFamily];
                }
            });
        }
    }, []);

    return (
        <div className="tab-style-container">
            <div className="tab-style-box">
                <div className="tab-style-section">
                    <h3>Font Size</h3>
                    <div className="tab-style-options">
                        {Object.keys(fontSizeMap).map((size) => (
                            <button
                                key={size}
                                className={`tab-style-btn ${fontSize === size ? "active" : ""}`}
                                onClick={() => setFontSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <button className="tab-style-set-btn" onClick={handleSetStyle}>Set</button>
                </div>

                <div className="tab-style-section">
                    <h3>Font Color</h3>
                    <div className="tab-style-options">
                        {Object.keys(fontColors).map((color) => (
                            <button
                                key={color}
                                className={`tab-style-btn ${fontColor === color ? "active" : ""}`}
                                onClick={() => setFontColor(color)}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                    <button className="tab-style-set-btn" onClick={handleSetStyle}>Set</button>
                </div>

                <div className="tab-style-section">
                    <h3>Font Family</h3>
                    <div className="tab-style-options">
                        {Object.keys(fontFamilies).map((family) => (
                            <button
                                key={family}
                                className={`tab-style-btn ${fontFamily === family ? "active" : ""}`}
                                onClick={() => setFontFamily(family)}
                            >
                                {family}
                            </button>
                        ))}
                    </div>
                    <button className="tab-style-set-btn" onClick={handleSetStyle}>Set</button>
                </div>
            </div>
        </div>
    );
}

