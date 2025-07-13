import React, { useState } from "react";
import { useTheme } from "styled-components";
import { JSONTree } from "react-json-tree";
import useJson from "../../../../store/useJson";
import { Label } from "./Label";
import { Value } from "./Value";
import { Button } from "@mantine/core";

export const TreeView = () => {
  const theme = useTheme();
  const json = useJson(state => state.json);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Button onClick={() => setExpanded(!expanded)}>{expanded ? "Collapse All" : "Expand All"}</Button>
      <JSONTree
        hideRoot
        data={JSON.parse(json)}
        valueRenderer={(valueAsString, value) => <Value {...{ valueAsString, value }} />}
        labelRenderer={(keyPath, nodeType) => <Label {...{ keyPath, nodeType }} />}
        shouldExpandNode={() => expanded}
        theme={{
          extend: {
            overflow: "scroll",
            height: "100%",
            scheme: "monokai",
            author: "wimer hazenberg (http://www.monokai.nl)",
            base00: theme.GRID_BG_COLOR,
          },
        }}
      />
    </div>
  );
};
