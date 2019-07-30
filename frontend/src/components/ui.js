/** @jsx jsx */
import { jsx } from "@emotion/core";

const buttonStyles = {
  height: 48,
  display: "flex",
  flex: "1 1 0",
  maxWidth: 226,
  justifyContent: "center",
  alignItems: "center",
  padding: "0 24px",
  background: "linear-gradient(180deg, #01A4FE 0%, #0047FF 100%)",
  boxShadow: "0px 4px 4px rgba(0, 102, 255, 0.2)",
  borderRadius: 24,
  border: 0,
  color: "white",
  fontSize: "1rem",
  textTransform: "uppercase",
  textDecoration: "none",
  fontWeight: 500,
  transition: "all 0.25s",
  boxSizing: "border-box",
  cursor: "pointer",
  "&:focus": {
    outline: "none"
  }
};

function Button({ styles, ...props }) {
  return <button {...props} css={{ ...buttonStyles, ...styles }} />;
}

function LabelValue({ styles, styleLabel, children, stylesValue, ...props }) {
  // props required = label, value
  const border = `border${props.border}`;
  const cssItems = {
    [border]: "1px solid #E7EAF1",
    "&:last-child": {
      borderRight: "none"
    }
  };

  return (
    <section css={{ ...cssItems, padding: 14, ...styles }}>
      <p
        css={{
          fontSize: 9,
          textTransform: "uppercase",
          color: "#6E6E6E",
          ...styleLabel,
          "@media (min-width: 375px)": {
            fontSize: 12
          }
        }}
      >
        {props.label}
      </p>
      <strong
        css={{
          fontSize: 18,
          color: "#211F1F",
          textTransform: "capitalize",
          fontWeight: 400,
          ...stylesValue
        }}
      >
        {props.value}
      </strong>
      {children}
    </section>
  );
}

function Card({ children, styles }) {
  return (
    <div
      css={{
        backgroundColor: "white",
        borderRadius: 8,
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.12)",
        width: "100%",
        ...styles
      }}
    >
      {children}
    </div>
  );
}

function TitleView({ children, styles }) {
  return (
    <div
      css={{
        fontWeight: 500,
        fontSize: 20,
        textAlign: "center",
        marginBottom: "1rem",
        ...styles,
        "@media (min-width: 375px)": {
          fontSize: 24
        }
      }}
    >
      {children}
    </div>
  );
}

function Row({ children, styles = {} }) {
  return (
    <div css={{ display: "flex", "& > *": { flex: "1 1 0" }, ...styles }}>
      {children}
    </div>
  );
}

function Center({ children, styles = {} }) {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        ...styles
      }}
    >
      {children}
    </div>
  );
}

function ColumnEvenly({ children, styles = {} }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
        ...styles
      }}
    >
      {children}
    </div>
  );
}

function ColumnSpaceBetween({ children, styles = {} }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        ...styles
      }}
    >
      {children}
    </div>
  );
}

function WhisperText({ children, styles }) {
  return (
    <p css={{ fontSize: 13, textAlign: "center", color: "#70798B", ...styles }}>
      {children}
    </p>
  );
}

function Input({ children, styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        border: 0,
        borderBottom: "1px solid #e7eaf1",
        fontSize: 32,
        textAlign: "center",
        "&:focus": {
          outline: "none",
          borderBottom: "1px solid #0074ff"
        },
        ...styles
      }}
    />
  );
}

export {
  buttonStyles,
  Button,
  LabelValue,
  Card,
  TitleView,
  Row,
  Center,
  ColumnEvenly,
  WhisperText,
  ColumnSpaceBetween,
  Input
};
