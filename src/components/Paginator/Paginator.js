import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Paginator/Paginator.css";
import { setNewPage } from "../../Store/redusers/table";
import { paginatorPages } from "./paginatorPages";

function Paginator() {
  const dispatch = useDispatch();
  const { page, numAllPages } = useSelector((state) => state.table);
  return (
    <div className="paginator">
      <span>
        {" "}
        <button
          className="btn  btn-dark btnpaginator btnScipPaginator"
          onClick={() => dispatch(setNewPage(1))}
        >
          {" "}
          First{" "}
        </button>
      </span>

      <span>
        {page === numAllPages ? (
          <button
            className="btn  btn-dark btnpaginator"
            onClick={() =>
              dispatch(setNewPage(paginatorPages(-4, page, numAllPages)))
            }
          >
            {paginatorPages(-4, page, numAllPages)}
          </button>
        ) : null}
      </span>

      <span>
        {page === numAllPages || page === numAllPages - 1 ? (
          <button
            className="btn  btn-dark btnpaginator"
            onClick={() =>
              dispatch(setNewPage(paginatorPages(-3, page, numAllPages)))
            }
          >
            {paginatorPages(-3, page, numAllPages)}
          </button>
        ) : null}
      </span>

      <button
        className="btn btn-dark btnpaginator"
        onClick={() =>
          dispatch(setNewPage(paginatorPages(-2, page, numAllPages)))
        }
      >
        {paginatorPages(-2, page, numAllPages)}
      </button>

      <button
        className="btn  btn-dark btnpaginator"
        onClick={() =>
          dispatch(setNewPage(paginatorPages(-1, page, numAllPages)))
        }
      >
        {paginatorPages(-1, page, numAllPages)}
      </button>

      <button
        className="btn  btn-dark btnpaginator selected"
        onClick={() =>
          dispatch(setNewPage(paginatorPages(0, page, numAllPages)))
        }
      >
        {paginatorPages(0, page, numAllPages)}
      </button>

      <button
        className="btn  btn-dark btnpaginator"
        onClick={() =>
          dispatch(setNewPage(paginatorPages(1, page, numAllPages)))
        }
      >
        {paginatorPages(1, page, numAllPages)}
      </button>

      <button
        className="btn  btn-dark btnpaginator"
        onClick={() =>
          dispatch(setNewPage(paginatorPages(2, page, numAllPages)))
        }
      >
        {paginatorPages(2, page, numAllPages)}
      </button>

      <span>
        {page === 1 || page === 2 ? (
          <button
            className="btn  btn-dark btnpaginator"
            onClick={() =>
              dispatch(setNewPage(paginatorPages(3, page, numAllPages)))
            }
          >
            {paginatorPages(3, page, numAllPages)}
          </button>
        ) : null}
      </span>

      <span>
        {page === 1 ? (
          <button
            className="btn  btn-dark btnpaginator"
            onClick={() =>
              dispatch(setNewPage(paginatorPages(4, page, numAllPages)))
            }
          >
            {paginatorPages(4, page, numAllPages)}
          </button>
        ) : null}
      </span>

      <span>
        {" "}
        <button
          className="btn  btn-dark btnpaginator btnScipPaginator"
          onClick={() => dispatch(setNewPage(numAllPages))}
        >
          {" "}
          Last{" "}
        </button>
      </span>
    </div>
  );
}

export default React.memo(Paginator);
