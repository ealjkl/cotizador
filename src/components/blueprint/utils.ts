import { useEffect } from "react";

export function computeXY(svgPath: SVGPathElement) {
  const bbox = svgPath.getBBox();

  // Calculate center of bounding box
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  return [centerX, centerY];
}

export function computeXY2(svgPath: SVGPathElement) {
  const points = svgPath.getAttribute("points");
  const pointPairs = points!
    .split(" ")
    .map((pair) => pair.split(",").map(Number));

  // Calculate centroid
  const centroid = pointPairs.reduce(
    (acc, [x, y]) => [acc[0] + x, acc[1] + y],
    [0, 0]
  );
  centroid[0] /= pointPairs.length;
  centroid[1] /= pointPairs.length;
  return [centroid[0], centroid[1]];
}

export function adjustCenter(center: [number, number], num: string) {
  let [centerX, centerY] = center;
  if (num.length == 1) {
    centerX -= 4;
  } else if (num.length == 2) {
    centerX -= 8;
  } else if (num.length >= 3) {
    centerX -= 11;
  }

  return [centerX, centerY];
}

export function useAddText(svgRef: React.RefObject<SVGSVGElement>) {
  useEffect(() => {
    addTextsFn(svgRef);
    return removeTextsFn;
  }, [svgRef]);
}

export function addTextsFn(svgRef: React.RefObject<SVGSVGElement>) {
  const textsGroups = document.getElementById("texts-group");
  console.log("textsGroups", textsGroups);
  if (textsGroups) {
    return;
  }

  const g = svgRef!.current?.children[1]?.children[1];
  console.log("svgRef.current", svgRef.current);
  console.log("g", g);

  const children = g?.children;
  const textsGroupElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  textsGroupElement.id = "texts-group";
  g!.appendChild(textsGroupElement);
  for (const child of children as any) {
    const num = child.dataset["number"];
    if (num != undefined) {
      const child_ = child as SVGPathElement;

      const center = computeXY(child_);
      const [centerX, centerY] = adjustCenter(center as [number, number], num);
      const textElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      textElement.textContent = child.dataset["number"];
      textElement.classList.add("text-svg-label");
      textElement.setAttribute("font-weight", "bold");
      textElement.setAttribute("font-size", "15px");
      textElement.setAttribute("font-family", "sans-serif");
      textElement.setAttribute("x", String(centerX));
      textElement.setAttribute("y", String(centerY));

      textsGroupElement!.appendChild(textElement);
    }
  }
}

export function removeTextsFn() {
  const g = document.getElementById("texts-group");
  g?.remove();
}
