import React from "react";
import { Table } from "antd";
import MdCheckmark from "react-ionicons/lib/MdCheckmark";
import MdClose from "react-ionicons/lib/MdClose";

const columns = [
  {
    title: "",
    dataIndex: "subscription",
    key: "subscription",
  },
  {
    title: "BASIC",
    dataIndex: "basic",
    key: "basic",
  },
  {
    title: "STANDARD",
    dataIndex: "standard",
    key: "standard",
  },
  {
    title: "PREMIUM",
    dataIndex: "premium",
    key: "premium",
  },
];

const trully = <MdCheckmark className="icons" />;
const folse = <MdClose className="icons" />;

const data = [
  {
    key: "1",
    subscription: "Monthly price",
    basic: `$${9.99}`,
    standard: `$${13.99}`,
    premium: `$${16.99}`,
  },
  {
    key: "2",
    subscription: "HD available",
    basic: folse,
    standard: trully,
    premium: trully,
  },
  {
    key: "3",
    subscription: "Ultra HD available",
    basic: folse,
    standard: folse,
    premium: trully,
  },
  {
    key: "4",
    subscription: "Screens you can watch at the same time",
    basic: 1,
    standard: 2,
    premium: 4,
  },
  {
    key: "5",
    subscription: "Watch on your laptop, TV, phone and tablet",
    basic: trully,
    standard: trully,
    premium: trully,
  },
  {
    key: "6",
    subscription: "Unlimited movies and TV shows",
    basic: trully,
    standard: trully,
    premium: trully,
  },
  {
    key: "7",
    subscription: "Cancel anytime",
    basic: trully,
    standard: trully,
    premium: trully,
  },
];

function TabTable() {
  return <Table columns={columns} dataSource={data} />;
}

export default TabTable;
