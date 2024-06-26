import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import cvoRoutes from 'cvo/routes';
//import caveatsRoutes from 'caveats/cavRoutes';

const Home = () => {
    // const routz = [...cvoRoutes, ...caveatsRoutes]
    const routz = [...cvoRoutes]
    console.log(cvoRoutes)
    //  console.log(caveatsRoutes)
    return (
        <>
            <h1>THE HOST APPLICATION</h1>
            <h2>Some Routes loaded from remotes:</h2>

            <Routes>
                <Route path="/" element={
                    <Suspense fallback={"Loading...."}>
                        <div className="card">
                            <div className="card-body">
                                {routz && routz.length > 0 &&
                                    routz.map((item) => (
                                        <div key={item.header}>
                                            <br />
                                            <Link to={item.routeUri}>
                                                {item.header}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Suspense>
                } />
                {routz.map(route => (
                    <Route
                        key={route.routeUri}
                        path={route.routeUri}
                        element={
                            <Suspense fallback={"Loading...."}>
                                {route.component}
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </>
    )
}

export default Home