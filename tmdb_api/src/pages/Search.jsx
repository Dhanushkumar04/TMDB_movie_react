import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = useFetch(apiPath, queryTerm); // Get loading state

  useEffect(() => {
    document.title = `Search result for ${queryTerm}`;
  }, [queryTerm]);

  return (
    <main className="container">
      <h5 className="text-danger border-bottom py-2">
        {loading
          ? "Loading..."
          : movies.length === 0
          ? `No results found for ${queryTerm}`
          : `Results for ${queryTerm}`}
      </h5>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};
