import React from "react";
import { Button, Overlay, Stack, Text } from "@mantine/core";
import styled from "styled-components";
import useConfig from "../../../../store/useConfig";
import { useSessionStorage } from "@mantine/hooks";
import { ViewMode } from "../../../../enums/viewMode.enum";

export const NotSupported = () => {
  const darkmodeEnabled = useConfig(state => state.darkmodeEnabled);
  const [, setViewMode] = useSessionStorage({
    key: "viewMode",
    defaultValue: ViewMode.Graph,
  });

  return (
    <Overlay
      backgroundOpacity={0.8}
      color={darkmodeEnabled ? "gray" : "rgb(226, 240, 243)"}
      blur="1.5"
      center
    >
      <Stack maw="60%" align="center" justify="center" gap="sm">
        <Text fz="48" fw={600} c="bright">
          File too large
        </Text>
        <Text ta="center" size="lg" fw={500} c="gray" maw="600">
          This file is too large to be visualized as a graph.
          <br />
          Please try the tree view instead.
        </Text>
        <Button
            onClick={() => setViewMode(ViewMode.Tree)}
            size="lg"
            w="200"
            color="teal"
          >
            Switch to Tree View
          </Button>
      </Stack>
    </Overlay>
  );
};
