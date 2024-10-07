const toggleIconClass = ({ targetElm, rmvCls, addCls }) => {
  targetElm.classList.remove(rmvCls);
  targetElm.classList.add(addCls);
};

// toggle arrow icon on show and hide countries list
export default function toggleArrowIcon({ targetElm, iconType }) {
  const upIconClass = "fa-caret-up";
  const downIconClass = "fa-caret-down";

  iconType === "down"
    ? toggleIconClass({ targetElm, rmvCls: upIconClass, addCls: downIconClass })
    : toggleIconClass({
        targetElm,
        rmvCls: downIconClass,
        addCls: upIconClass,
      });
}
